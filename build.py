import base64
import itertools as it
import json
import pathlib
import shutil
import subprocess


self_path = pathlib.Path(__file__).parent.resolve()


def build():
    run("wasm-pack", "build", "--target", "web")

    copy(
        self_path / "pkg" / "wasm_example.js",
        self_path / "solution" / "wasm_bindgen_wrapper.js",
    )

    data = (self_path / "pkg" / "wasm_example_bg.wasm").read_bytes()
    data = base64.b64encode(data).decode("ascii")

    content = ["const module_data = Uint8Array.from(atob(", '  ""']
    for i in it.count():
        start = 120 * i
        end = 120 * (i + 1)
        if start > len(data):
            break

        content += [f"    + {json.dumps(data[start:end])}"]

    content += ["  ), c => c.charCodeAt(0));"]

    (self_path / "module.js").write_text("\n".join(content))

    scaffold_p = self_path / "tasks" / "scaffold.html"
    scaffold = scaffold_p.read_text()

    body = ""
    body_with_solutions = ""
    for task_p in sorted((self_path / "tasks").glob("task_??.js")):
        solution_p = task_p.parent / task_p.name.replace("task", "solution")

        body += task_p.read_text() + "\n\n"
        body += "throw new Error('Not implemented: Write your solution here')\n\n"

        body_with_solutions += task_p.read_text() + "\n\n"
        body_with_solutions += solution_p.read_text() + "\n\n"

    index_p = self_path / "index.html"
    index_p.write_text(scaffold.replace("/** body **/", body))

    solution_p = self_path / "solution" / "solution.html"
    solution_p.write_text(
        scaffold.replace("module.js", "../module.js").replace(
            "/** body **/", body_with_solutions
        )
    )


def run(*args, **kwargs):
    kwargs.setdefault("check", True)

    args = [str(arg) for arg in args]
    print("::", " ".join(args))
    return subprocess.run(args, **kwargs)


def copy(src, dst):
    print(f"copy {src} -> {dst}")
    shutil.copy(src, dst)


if __name__ == "__main__":
    build()
