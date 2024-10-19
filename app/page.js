import MenuPage from "./components/Menu.js";
import LoginPage from "./login/page.js";

export default function Home() {
  const item = {
    name: "Home",
    price: 10,
  };
  return (
    <div className="text-black text-2xl">
      <LoginPage prop={item} />
      <p>
        {nhietdo < 20 ? "de chiu" : ""}
        {nhietdo < 20 ? "de chiu" : ""}
      </p>
    </div>
  );
}
