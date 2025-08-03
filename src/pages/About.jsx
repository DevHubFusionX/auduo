const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Baba Dan Audu</h1>
          <p className="text-xl text-gray-600">Actor. Entrepreneur. Icon.</p>
        </div>

        {/* Biography Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Journey Begins</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Born into humble circumstances, Baba Dan Audu's early life as an Almajiri 
                shaped his character and determination. Despite the challenges, he pursued 
                education and discovered his passion for storytelling and performance.
              </p>
              <p>
                His journey from the streets to the screen is a testament to the power 
                of perseverance and talent. Every role he played, every story he told, 
                was infused with the authenticity of his lived experience.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
            <img 
              src="/api/placeholder/400/400" 
              alt="Young Baba Dan Audu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Acting Career */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Acting Milestones</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Radio Beginnings</h3>
              <p className="text-gray-600">
                Started his entertainment career in radio, honing his voice and 
                storytelling skills that would later define his screen presence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Television Era</h3>
              <p className="text-gray-600">
                Transitioned to television with NTA and DITV, becoming a household 
                name through series like "Labarina" and "Komai Tsawon Dare".
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">YouTube & Modern Era</h3>
              <p className="text-gray-600">
                Embraced digital platforms, bringing Kannywood to global audiences 
                and starring in acclaimed films like "Dila".
              </p>
            </div>
          </div>
        </div>

        {/* Business Transition */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
            <img 
              src="/api/placeholder/400/400" 
              alt="Dan Audu Collection Store"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Entrepreneurial Spirit</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Not content with just acting success, Baba Dan Audu ventured into 
                business, establishing the Dan Audu Collection. His shoe business 
                at Wambai Market represents his commitment to quality and service.
              </p>
              <p>
                The transition from entertainment to entrepreneurship showcases his 
                versatility and business acumen, proving that talent and hard work 
                can open doors in any industry.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-blue-50 p-8 rounded-lg text-center">
          <blockquote className="text-2xl italic text-gray-800 mb-4">
            "Success is not just about reaching the top, but about lifting others 
            as you climb. Every role I play, every business I build, is a step 
            towards creating opportunities for our community."
          </blockquote>
          <cite className="text-lg font-semibold text-blue-600">- Baba Dan Audu</cite>
        </div>
      </div>
    </div>
  );
};

export default About;