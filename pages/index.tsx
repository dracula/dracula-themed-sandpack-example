import Dracula from "../data/dracula";
import type { NextPage } from "next";
import { Sandpack } from "@codesandbox/sandpack-react";
import { dracula } from "@codesandbox/sandpack-themes";

const Home: NextPage = () => {
	return (
		<main>
			<h1 className="title">Sandpack with Dracula Theme! 🧛🏻</h1>
			<div className="text">
				<p>
					This project is just an example of what the Dracula-themed Sandpack looks
					like.
				</p>
				<p>
					For instructions on how to reproduce this, you can see the{" "}
					<a
						href="https://github.com/luxonauta/dracula-themed-sandpack-example"
						target="_blank"
						rel="noopener noreferrer"
					>
						source code for this project
					</a>
					, see the documentation on the{" "}
					<a
						href="https://draculatheme.com/notepad-plus-plus"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dracula Theme website
					</a>{" "}
					or in the{" "}
					<a
						href="https://sandpack.codesandbox.io/docs/getting-started/themes"
						target="_blank"
						rel="noopener noreferrer"
					>
						official Sandpack doc
					</a>
					.
				</p>
			</div>
			<div className="sandpack-container">
				<Sandpack
					template="react"
					theme={dracula}
					files={{
						"/App.js": Dracula,
					}}
					options={{
						showLineNumbers: true,
						externalResources: [
							"https://cdn.jsdelivr.net/gh/luxonauta/luxa@latest/dist/compressed/luxa.css",
						],
					}}
				/>
			</div>
		</main>
	);
};

export default Home;
