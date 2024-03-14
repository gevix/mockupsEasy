export default function Card() {
  return (
    <div className="card card-compact w-auto bg-base-100 shadow-xl">
      <div className="">
        <img 
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="relative object-cover"
        />
      </div>
      
      <div className="card-body">
        <h2 className="card-title">Template Name</h2>
        <p>Template Description</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Edit Template</button>
        </div>
      </div>
    </div>
  );
}