import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://ridealongdriver.web.app/" }}
      style={{ marginTop: 0 }}
    />
  );
}
