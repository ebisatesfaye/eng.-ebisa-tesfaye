import { useState, useEffect } from "react";

function ProjectsCard({ title, description, images = [], techStack = [], github, deployedLink }) {
    const [showMore, setShowMore] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);


    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };


    function insertLineBreaks(text, maxChars = 120) {
        const result = [];
        let start = 0;

        while (start < text.length) {
            // Take maxChars slice
            let slice = text.slice(start, start + maxChars);

            // Avoid breaking words: find last space in slice
            const lastSpace = slice.lastIndexOf(" ");
            if (lastSpace > -1 && start + maxChars < text.length) {
                slice = text.slice(start, start + lastSpace);
                start += lastSpace + 1;
            } else {
                start += maxChars;
            }
            slice = slice + "\n"; // Add line break after each slice
            result.push(slice);
        }

        // Join slices with \n
        return result.join("\n");
    }
    // Keyboard support for modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") setIsOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-bold mb-2"> {title}</h3>
                {images.length > 0 && (
                    <div className="relative mb-4">

                        <img
                            src={images[currentImage]}
                            onClick={() => setIsOpen(true)}
                            alt={title}
                            className="rounded-lg w-full h-48 object-cover border border-white/10 cursor-pointer hover:brightness-95 transition"
                        />

                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black/70 transition"
                        >
                            ◀
                        </button>


                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black/70 transition"
                        >
                            ▶
                        </button>

                    </div>

                )}



                <p className="text-gray-400 mb-4 leading-relaxed">
                    {showMore
                        ? insertLineBreaks(description, 120)
                        : description.slice(0, 120) + " . . ."}

                </p>

                <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-blue-400 hover:text-blue-300 text-sm mb-4 transition"
                >
                    {showMore ? "Show Less ▲" : "Show More ▼"}
                </button>

                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, key) => (
                        <span
                            key={key}
                            className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                        >

                            {tech}
                        </span>
                    ))}
                </div>


                <div className="flex justify-between items-center">

                    {deployedLink && (
                        <a
                            href={deployedLink}
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live →
                        </a>
                    )}

                    {github && (
                        <a
                            href={github}
                            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source Code →
                        </a>
                    )}

                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative max-w-5xl w-full px-4 flex items-center justify-center"
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >

                        {/* 🔹 Previous Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 bg-black/60 text-white px-3 py-2 rounded hover:bg-black/80 transition"
                        >
                            ◀
                        </button>

                        {/* 🔹 Full Image */}
                        <img
                            src={images[currentImage]}
                            alt="Full View"
                            className="w-full max-h-[95vh] object-contain rounded-lg "
                        />

                        {/* 🔹 Next Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-4 bg-black/60 text-white px-3 py-2 rounded hover:bg-black/80 transition"
                        >
                            ▶
                        </button>

                        {/* 🔹 Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-[-20px] right-[-20px] text-white text-2xl"
                        >
                            ✕
                        </button>

                    </div>
                </div>
            )}
        </>

    );
}

export default ProjectsCard;