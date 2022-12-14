import "../styles/global.css";

function App(props) {
	const {Component, pageProps} = props;

	return (
		<Component {...pageProps} />
	);
}

export default App;

