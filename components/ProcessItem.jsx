



const ProcessItem = ({ number, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center relative overflow-hidden group hover:shadow-lg transition-all">
      <div className="absolute top-0 left-0 w-full h-1 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-700 text-green-700-foreground mx-auto mb-4 text-2xl font-medium">
        {number}
      </div>
      <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
      <p className="text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default ProcessItem;
