function Category({ category: { id, title, image } }) {
  return (
    <a
      href="#"
      className="flex flex-col flex-nowrap rounded-lg items-center text-center gap-y-4 mb-8 transition hover:bg-purple-50 hover:bg-cover group">
      <img
        className="w-12 h-12 border border-gray-200 rounded-lg"
        src={image}
        alt={title}
      />
      <div className="text-sm  font-semibold transition  group-hover:text-primary">
        {title}
      </div>
    </a>
  );
}

export default Category;
