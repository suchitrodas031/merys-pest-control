import { Link } from 'react-router-dom';

const blogs = [
  { id: '1', title: 'Importance of Regular Pest Control', snippet: 'Why you should schedule quarterly inspections for your home...' },
  { id: '2', title: 'Signs of Termite Damage', snippet: 'Look out for these 5 critical signs to save your wooden structures...' },
  { id: '3', title: 'How to Prevent Bed Bugs', snippet: 'Top travel tips to ensure you don’t bring unwanted pests home...' },
  { id: '4', title: 'DIY vs Professional Control', snippet: 'When to call the experts instead of trying to handle it yourself...' }
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#800000] mb-10 text-center">Pest Control Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white border p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-t-[#800000] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-[#800000]">{blog.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{blog.snippet}</p>
            </div>
            <Link to={`/blog/${blog.id}`} className="inline-block text-[#800000] font-bold hover:underline">Read Full Article &rarr;</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;