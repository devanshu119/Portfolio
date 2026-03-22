import { Github } from "lucide-react";

export const projects = [
  {
    title: "Video Scraping Tool",
    description: "Automated YouTube video scraping using youtube_dl and BeautifulSoup. Implemented proper file naming conventions and used ScraperAPI to bypass anti-scraping measures.",
    link: "https://github.com/devanshu119/video-scraping-tool"
  },
  {
    title: "Deep Audio Classifier",
    description: "CNN-based audio classification model with 92% accuracy on urban sounds. Includes data preprocessing with Librosa and augmentation techniques, deployed as a REST API using FastAPI.",
    link: "https://github.com/devanshu119/Deep-Audio-Classifier-"
  },
  {
    title: "Oil Spill Detection",
    description: "End-to-end deep learning pipeline for detecting oil spills from SAR satellite imagery. Utilizes U-Net and DeepLabv3 for segmentation and provides spill delineation stats.",
    link: "https://github.com/devanshu119/oil-spill-detection"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left tracking-tighter">
          Showcase
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-white/10 p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 flex justify-between items-start">
                <h3 className="text-2xl font-semibold group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>

              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
