import MySidebar from "../_components/MySidebar";
import MyCard from "../_components/MyCard";
import AddNewTemplateButton from "../_components/AddNewTemplateButton";

export const metadata = {
  title: "MockupsEasy1",
  description: "Turn your art into stunning mockups with ease",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Admin() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-600">
      <div className="w-auto bg-gray-800 text-white">
        <div className="p-4">
          <MySidebar />
        </div>
      </div>
      <div className="w-auto flex-col bg-white text-gray-900 flex-grow">
        <div className="p-4 justify-center">
          <AddNewTemplateButton />
        </div>
        <div className="w-full px-4 py-2 flex flex-wrap items-center justify-center space-x-4 space-y-4">
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
        </div>
      </div>
    </div>
  );
}