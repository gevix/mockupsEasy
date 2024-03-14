import Model from "~/app/_components/Model";

export default function NewTemplate() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 px-4 py-8 lg:flex-row lg:items-start lg:px-16">
      <div className="w-full space-y-8 lg:w-1/2">
        <h1 className="mb-8 text-4xl">Add New Template</h1>
        <form className="w-full space-y-4">
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Name"
          />
          <label className="form-control w-full max-w-xs">
            <div className="label w-full">
              <span className="label-text">Upload GlB Scene</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
            <div className="label w-full"></div>
          </label>
          <textarea
            className="textarea w-full"
            placeholder="Enter description"
          ></textarea>
          <input
            className="input input-bordered w-full"
            type="file"
            placeholder="Image"
          />
          <select className="select w-full">
            <option disabled selected>
              Category
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <div className="flex space-x-4">
            <button className="btn w-full bg-green-400 text-2xl  font-bold text-white">
              Publish
            </button>
            <button className="btn w-full bg-red-400 text-2xl font-bold text-white">
              Delete
            </button>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-8">
        <div className="w-full">          
        </div>
      </div>
    </div>
  );
}
