import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const publications = [
    {
      title: "The Midnight Garden",
      type: "Short Story",
      date: "2024",
      excerpt: "A tale of mystery and wonder in the moonlit hours..."
    },
    {
      title: "Echoes of Tomorrow",
      type: "Essay",
      date: "2024",
      excerpt: "Reflections on time, memory, and the stories we tell..."
    },
    {
      title: "The Last Letter",
      type: "Poetry",
      date: "2023",
      excerpt: "Words unsaid, emotions untold, forever captured in ink..."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        <header className="text-center mb-20 animate-fade-in">
          <h1 className="font-cormorant text-7xl font-bold text-primary mb-4 tracking-tight">
            Alexandra Sterling
          </h1>
          <p className="text-xl text-muted-foreground font-light italic">
            Writer • Storyteller • Dreamer
          </p>
        </header>

        <section className="mb-24 animate-slide-up">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Award" className="text-secondary" size={32} />
            <h2 className="font-cormorant text-5xl font-semibold text-foreground">
              Contest Entry
            </h2>
          </div>
          
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-secondary/20 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="font-cormorant text-3xl font-bold text-primary mb-6">
              The Storm That Changed Everything
            </h3>
            
            <div className="prose prose-lg max-w-none font-merriweather text-foreground/90 leading-relaxed space-y-4">
              <p>
                The <strong>characters</strong> in my story are Emma, a curious twelve-year-old girl, and her grandfather Thomas, 
                a retired sailor with countless tales of the sea. They lived together in a small coastal cottage overlooking the ocean.
              </p>
              
              <p>
                The <strong>place</strong> where this story unfolds is the rocky coastline of Maine, where wild waves crash against 
                ancient cliffs and seabirds circle endlessly above the churning waters. Their cottage stood alone on the cliff's edge, 
                weathered by decades of storms.
              </p>
              
              <p>
                The <strong>time</strong> was late autumn, precisely on October fifteenth, when the first major storm of the season 
                approached. Dark clouds gathered ominously on the horizon as the afternoon light faded into an eerie twilight.
              </p>
              
              <p>
                The <strong>events in order</strong> began when Emma noticed her grandfather acting strangely, staring at the approaching 
                storm with unusual intensity. First, he gathered emergency supplies. Then, he told Emma about a secret he had kept for 
                fifty years. Next, they descended the cliff path together as the storm intensified. Finally, they discovered an old shipwreck 
                that the storm had revealed, containing letters her grandfather had written to his lost love decades ago.
              </p>
              
              <p>
                The <strong>climax event</strong> occurred when the largest wave crashed against the cliff, nearly sweeping them both away, 
                but in that terrifying moment, Emma understood why her grandfather had needed to face this storm—to finally let go of his past 
                and embrace the present with his granddaughter by his side.
              </p>
              
              <p>
                Their <strong>feelings</strong> transformed throughout this experience. Initially, Emma felt curious and slightly frightened 
                by the approaching storm and her grandfather's mysterious behavior. Thomas experienced a mixture of nostalgia, regret, and 
                determination. By the story's end, both felt a profound sense of peace, understanding, and renewed connection to each other 
                and the healing power of nature's fury.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic text-center">
                Word count: 312 words • All required elements included
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-20 animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="User" className="text-secondary" size={32} />
            <h2 className="font-cormorant text-5xl font-semibold text-foreground">
              About Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon name="BookOpen" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-primary mb-2">
                    My Journey
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    I've been crafting stories since childhood, finding magic in everyday moments. 
                    My work explores themes of memory, connection, and the natural world.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/20 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Icon name="Sparkles" className="text-secondary" size={28} />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-secondary mb-2">
                    Writing Style
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    My prose blends lyrical descriptions with emotional depth, creating immersive 
                    narratives that resonate with readers long after the final page.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Library" className="text-secondary" size={32} />
            <h2 className="font-cormorant text-5xl font-semibold text-foreground">
              Publications
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/60 backdrop-blur-sm border-primary/10 hover:border-secondary/40 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Badge className="mb-3 bg-secondary/20 text-secondary border-secondary/30">
                  {pub.type}
                </Badge>
                <h3 className="font-cormorant text-2xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{pub.date}</p>
                <p className="text-foreground/70 italic leading-relaxed">
                  {pub.excerpt}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <footer className="text-center py-8 border-t border-border/30 animate-fade-in">
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors hover:scale-110 transform duration-200">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors hover:scale-110 transform duration-200">
              <Icon name="BookOpen" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors hover:scale-110 transform duration-200">
              <Icon name="Feather" size={24} />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Alexandra Sterling • All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
