import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" color-scheme="dark">
				<Head>
					<meta charSet="utf-8" />
					<meta name="author" content="Lucas de França" />
					<meta
						name="description"
						content="A simple example project of what the Dracula-themed Sandpack looks like."
					/>
					<meta name="keywords" content="Sandpack, Dracula" />

					<link rel="icon" type="image/ico" href="/favicon.ico" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&display=swap"
					/>

					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/gh/luxonauta/luxa@latest/dist/compressed/luxa.css"
					/>

					<title>Dracula-themed Sandpack 🧛🏻</title>
				</Head>
				<body className="lx-scrollbar">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
