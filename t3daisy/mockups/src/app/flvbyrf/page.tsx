import Card from "../_components/Card";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-600 md:flex-row">
      <div className="w-full md:w-auto bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="mx-6 mb-4 text-2xl font-bold">Menu</h1>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block rounded px-4 py-2 hover:bg-gray-700">
                Item 1
              </a>
            </li>
            <li>
              <a href="#" className="block rounded px-4 py-2 hover:bg-gray-700">
                Item 2
              </a>
            </li>
            <li>
              <a href="#" className="block rounded px-4 py-2 hover:bg-gray-700">
                Item 3
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-auto flex-grow flex-col bg-white text-gray-900">
        <div className="flex w-full items-center justify-between bg-blue-500 px-4 py-2 text-white">
          <h1 className="text-xl font-bold">MockupsEasy</h1>
          <a className="btn" href="/flvbyrf/new-template">
            Add a New Template
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}