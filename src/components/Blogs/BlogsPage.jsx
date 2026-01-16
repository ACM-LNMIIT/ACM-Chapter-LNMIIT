// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import { Button } from "../ui/button";
// import { FileText, X } from "lucide-react";
// import { blogsData } from "../../utils/blogsData";

// function BlogPreview({
//   blog,
//   onClose,
//   theme = "bg-[#121212] text-[#e0e0e0]",
//   headingColor = "text-[#bb86fc]",
//   linkColor = "text-[#bb86fc] hover:text-[#d7b8ff]",
//   codeColor = "bg-[#1f1f1f] text-[#e0e0e0]",
//   blockquoteColor = "border-l-[#bb86fc] bg-[#1f1f1f]",
// }) {
//   if (!blog) return null;
//   const { content } = blog;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//       <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl border border-[#2d2d2d]">
//         <CardContent className="pt-6 relative">
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
//           >
//             <X size={24} />
//           </button>
//           <div className="mb-4 text-white">
//             <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
//             <p className="text-muted-foreground text-sm">{blog.description}</p>
//           </div>
//           <div className={`${theme} p-6 rounded-md`}>
//             <article className="prose prose-invert max-w-none">
//               <h1 className={`${headingColor} text-2xl font-bold`}>
//                 {content.heading}
//               </h1>
//               <p className="text-base leading-relaxed">{content.intro}</p>
//               <h2 className={`${headingColor} text-xl font-semibold mt-4`}>
//                 {content.subheading}
//               </h2>
//               <p className="leading-relaxed">{content.mainContent}</p>
//               <pre
//                 className={`${codeColor} p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto`}
//               >
//                 <code>{content.codeExample}</code>
//               </pre>
//               <blockquote
//                 className={`${blockquoteColor} border-l-4 pl-4 py-1 my-4 rounded-md`}
//               >
//                 <p className="italic">"{content.quote}"</p>
//               </blockquote>
//               <h3 className={`${headingColor} text-lg font-semibold`}>
//                 Practical Applications
//               </h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 {content.applications.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             </article>
//           </div>
//           <div className="mt-6 flex justify-end">
//             <a href={blog.pdfLink} className="w-auto">
//               <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black dark:bg-amber-300 dark:hover:bg-amber-400 flex items-center gap-2">
//                 <FileText className="h-4 w-4" />
//                 <span>Download PDF</span>
//               </Button>
//             </a>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default function BlogsPage() {
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   const handleReadMore = (blog) => setSelectedBlog(blog);
//   const handleClosePreview = () => setSelectedBlog(null);

//   const sortedBlogs = blogsData.sort(
//     (a, b) => new Date(b.date) - new Date(a.date)
//   );

//   return (
//     <div className="min-h-screen bg-[#020B05] text-white px-4 dark:bg-[#e8e9cd]">
//       <div className="container mx-auto py-10">
//         <div className="mb-10 text-center">
//           <p className="text-[3.5rem] max-sm:text-[1.5rem] font-bold bg-gradient-to-r from-[#F1F1EF] to-[#f1f1ef8d] dark:from-[#020B05] dark:to-[#020B05] bg-clip-text text-transparent">
//             Our Blogs
//           </p>
//           <p className="text-[1.5rem] max-sm:text-[1.5rem] font-bold bg-gradient-to-b from-[#9f9f9f] to-[#8383838d] dark:bg-gradient-to-b dark:from-[#3d3d3d] dark:to-[#3838388d] bg-clip-text text-transparent">
//             Discover our latest and updated collection of informative blogs
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {sortedBlogs.map((blog) => (
//             <Card
//               key={blog.id}
//               className="overflow-hidden flex flex-col h-full bg-[#041810] dark:bg-[#FFFEDD] border border-[#0A3323] rounded-2xl transition-shadow hover:shadow-lg"
//             >
//               <div className="relative h-48 w-full">
//                 <img
//                   src={blog.thumbnail || "/placeholder.svg"}
//                   alt={blog.title}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <CardHeader>
//                 <CardTitle className="text-white dark:text-[#3d3d3d] text-2xl leading-snug">
//                   {blog.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="flex-grow">
//                 <p className="text-gray-400 text-sm dark:text-[#3d3d3d] leading-relaxed">
//                   {blog.description}
//                 </p>
//                 <br />
//                 <p className="text-gray-400 text-sm dark:text-[#3d3d3d] leading-relaxed">
//                   Last updated on: {blog.date}
//                 </p>
//               </CardContent>
//               <CardFooter className="flex gap-2 mt-auto">
//                 <Button
//                   onClick={() => handleReadMore(blog)}
//                   className="w-full bg-teal-500 hover:bg-teal-600 text-black dark:bg-teal-300 dark:hover:bg-teal-400 flex items-center gap-2"
//                 >
//                   <FileText className="h-4 w-4" />
//                   <span>Read More</span>
//                 </Button>
//                 <a href={blog.pdfLink} className="w-full">
//                   <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black dark:bg-amber-300 dark:hover:bg-amber-400 flex items-center gap-2">
//                     <FileText className="h-4 w-4" />
//                     <span>Download PDF</span>
//                   </Button>
//                 </a>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {selectedBlog && (
//         <BlogPreview blog={selectedBlog} onClose={handleClosePreview} />
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { FileText } from "lucide-react";
import { blogsData } from "../../utils/blogsData";

export function BlogPreview({
  blog,
  onClose,
  theme = "bg-[#121212] text-[#e0e0e0]",
  headingColor = "text-[#bb86fc]",
  linkColor = "text-[#bb86fc] hover:text-[#d7b8ff]",
  codeColor = "bg-[#1f1f1f] text-[#e0e0e0]",
  blockquoteColor = "border-l-[#bb86fc] bg-[#1f1f1f]",
}) {
  if (!blog) return null;
  const { content } = blog;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-2xl border border-[#2d2d2d]">
        <CardContent className="pt-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="mb-4 text-white">
            <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
            <p className="text-muted-foreground text-sm">{blog.description}</p>
          </div>
          <div className={`${theme} p-6 rounded-md`}>
            <article className="prose prose-invert max-w-none">
              <h1 className={`${headingColor} text-2xl font-bold`}>
                {content.heading}
              </h1>
              <p className="text-base leading-relaxed">{content.intro}</p>
              <h2 className={`${headingColor} text-xl font-semibold mt-4`}>
                {content.subheading}
              </h2>
              <p className="leading-relaxed">{content.mainContent}</p>
              <pre
                className={`${codeColor} p-4 rounded-lg my-4 font-mono text-sm overflow-x-auto`}
              >
                <code>{content.codeExample}</code>
              </pre>
              <blockquote
                className={`${blockquoteColor} border-l-4 pl-4 py-1 my-4 rounded-md`}
              >
                <p className="italic">"{content.quote}"</p>
              </blockquote>
              <h3 className={`${headingColor} text-lg font-semibold`}>
                Practical Applications
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                {content.applications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="mt-6 flex justify-end">
            <a href={blog.pdfLink} className="w-auto">
              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black dark:bg-amber-300 dark:hover:bg-amber-400 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Download PDF</span>
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => setSelectedBlog(blog);
  const handleClosePreview = () => setSelectedBlog(null);

  const sortedBlogs = blogsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-[#020B05] text-white px-4 dark:bg-[#e8e9cd]">
      <div className="container mx-auto py-10">
        <div className="mb-10 text-center">
          <p className="text-[3.5rem] max-sm:text-[1.5rem] font-bold bg-gradient-to-r from-[#F1F1EF] to-[#f1f1ef8d] dark:from-[#020B05] dark:to-[#020B05] bg-clip-text text-transparent">
            Our Blogs
          </p>
          <p className="text-[1.5rem] max-sm:text-[1.5rem] font-bold bg-gradient-to-b from-[#9f9f9f] to-[#8383838d] dark:bg-gradient-to-b dark:from-[#3d3d3d] dark:to-[#3838388d] bg-clip-text text-transparent">
            Discover our latest and updated collection of informative blogs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBlogs.map((blog) => (
            <Card
              key={blog.id}
              className="overflow-hidden flex flex-col h-full bg-[#041810] dark:bg-[#FFFEDD] border border-[#0A3323] rounded-2xl transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <img
                  src={blog.thumbnail || "/placeholder.svg"}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white dark:text-[#3d3d3d] text-2xl leading-snug">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-400 text-sm dark:text-[#3d3d3d] leading-relaxed">
                  {blog.description}
                </p>
                <br />
                <p className="text-gray-400 text-sm dark:text-[#3d3d3d] leading-relaxed">
                  Last updated on: {blog.date}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 mt-auto">
                <Button
                  onClick={() => handleReadMore(blog)}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-black dark:bg-teal-300 dark:hover:bg-teal-400 flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  <span>Read More</span>
                </Button>
                <a href={blog.pdfLink} className="w-full">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black dark:bg-amber-300 dark:hover:bg-amber-400 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>Download PDF</span>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedBlog && (
        <BlogPreview blog={selectedBlog} onClose={handleClosePreview} />
      )}
    </div>
  );
}
