import { Article } from '../types/article';

export const mockArticles: Article[] = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in 2025",
    slug: "future-of-artificial-intelligence-2025",
    excerpt: "Exploring how AI will transform industries and daily life in the coming years, from healthcare advancements to personal assistants.",
    content: `
# The Future of Artificial Intelligence in 2025

Artificial intelligence has been rapidly evolving over the past decade, and its pace shows no signs of slowing down. As we look ahead to 2025, several key trends and developments are poised to reshape how we interact with AI in our daily lives and across industries.

## Healthcare Revolution

Perhaps one of the most promising applications of advanced AI is in healthcare. By 2025, we expect to see AI-powered diagnostic tools that can detect diseases earlier and with greater accuracy than human physicians alone. These systems will analyze patterns across vast datasets of medical images, patient histories, and genetic information to identify subtle indicators of conditions before they become symptomatic.

Moreover, personalized medicine will take a significant leap forward as AI algorithms tailor treatment plans to individual genetic profiles, lifestyle factors, and medical histories. This could dramatically improve outcomes while reducing side effects.

## Smarter Cities

Urban infrastructure is another area ripe for AI transformation. Smart city initiatives will leverage AI to optimize traffic flow, reduce energy consumption, and enhance public safety. Imagine traffic lights that adapt in real-time to changing conditions, or power grids that automatically balance supply and demand to minimize waste.

## Ethical Considerations

As AI becomes more powerful and ubiquitous, ethical questions will take center stage. How do we ensure that AI systems don't perpetuate existing biases? What privacy protections should be in place when AI can process and analyze vast amounts of personal data? These questions will require thoughtful engagement from technologists, policymakers, and citizens alike.

## Conclusion

The AI landscape of 2025 will be characterized by systems that are more capable, more accessible, and more deeply integrated into our daily lives than ever before. While challenges remain, the potential benefits—from healthcare advancements to environmental sustainability—are enormous. The future of AI is not just about smarter machines, but about how these technologies can help us build a better world.
    `,
    coverImage: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Technology",
    tags: ["ai", "technology", "future", "innovation"],
    author: {
      id: 1,
      name: "Alex Chen",
      bio: "Tech journalist and AI researcher"
    },
    createdAt: "2023-06-15T09:24:00Z",
    updatedAt: "2023-06-15T09:24:00Z",
    readTime: 8,
    commentCount: 24,
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Living: Small Changes with Big Impact",
    slug: "sustainable-living-small-changes-big-impact",
    excerpt: "Discover practical, everyday habits that can significantly reduce your environmental footprint without drastically changing your lifestyle.",
    content: `
# Sustainable Living: Small Changes with Big Impact

In an era of climate change and environmental challenges, many people want to make a difference but feel overwhelmed by the scale of the problem. The good news is that small, consistent changes in our daily habits can collectively create significant positive impact.

## Rethinking Consumption

One of the most powerful ways to reduce your environmental footprint is to simply buy less. Before making a purchase, ask yourself if you truly need the item, if it will provide lasting value, and if there are more sustainable alternatives. Consider second-hand options, which extend the lifecycle of products and reduce the resources needed for manufacturing new goods.

## Food Choices Matter

What we eat has enormous environmental implications. Consider reducing meat consumption, particularly beef, which has a disproportionately high carbon footprint. Even implementing "Meatless Mondays" can make a difference. Additionally, buying local and seasonal produce reduces transportation emissions and often results in fresher, more nutritious food.

## Energy Efficiency at Home

Simple adjustments to your home can yield significant energy savings. Replace conventional light bulbs with LEDs, unplug electronics when not in use, and adjust your thermostat by just a few degrees. These small changes can reduce your energy consumption—and your utility bills—without sacrificing comfort.

## Conclusion

Sustainable living doesn't require a complete lifestyle overhaul. By making mindful choices about consumption, diet, and energy use, we can collectively move toward a more sustainable future. Remember that perfection isn't the goal—progress is. Every positive choice, no matter how small, is a step in the right direction.
    `,
    coverImage: "https://images.pexels.com/photos/3698534/pexels-photo-3698534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Lifestyle",
    tags: ["sustainability", "environment", "eco-friendly", "green-living"],
    author: {
      id: 2,
      name: "Maya Johnson",
      bio: "Environmental advocate and minimalist lifestyle blogger"
    },
    createdAt: "2023-06-10T14:30:00Z",
    updatedAt: "2023-06-10T14:30:00Z",
    readTime: 6,
    commentCount: 18
  },
  {
    id: 3,
    title: "Mindfulness Meditation: A Beginner's Guide",
    slug: "mindfulness-meditation-beginners-guide",
    excerpt: "Learn the basics of mindfulness meditation and how it can help reduce stress, improve focus, and enhance overall well-being.",
    content: `
# Mindfulness Meditation: A Beginner's Guide

In our fast-paced, constantly connected world, finding moments of peace can seem impossible. Mindfulness meditation offers a practical approach to cultivating awareness and presence in daily life, with benefits ranging from stress reduction to improved emotional regulation.

## What is Mindfulness?

At its core, mindfulness is the practice of paying attention to the present moment with curiosity and without judgment. It involves observing your thoughts, feelings, bodily sensations, and environment without getting caught up in them or labeling them as "good" or "bad."

## Getting Started: A Simple 5-Minute Practice

Begin by finding a comfortable seated position. You can sit on a chair, cushion, or meditation bench. The key is to maintain an upright, alert posture while remaining comfortable.

Close your eyes or lower your gaze. Take a few deep breaths, then allow your breathing to return to its natural rhythm. There's no need to control or change your breath—simply observe it.

Focus your attention on the physical sensations of breathing. You might notice the rise and fall of your chest or abdomen, or the feeling of air passing through your nostrils.

When your mind inevitably wanders (and it will), gently redirect your focus back to your breath without criticizing yourself. This process of noticing when your mind has wandered and bringing your attention back is the essence of the practice.

## Benefits of Regular Practice

Research has shown that consistent mindfulness meditation can reduce stress, improve focus and memory, enhance emotional regulation, and even strengthen immune function. Many practitioners also report greater self-awareness and improved relationships.

## Conclusion

Remember that mindfulness is a skill that develops with practice. Don't be discouraged if your mind seems especially busy or if sitting still feels challenging at first. Even experienced meditators have difficult sessions. The key is consistency—even five minutes of daily practice can yield significant benefits over time.
    `,
    coverImage: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Health",
    tags: ["meditation", "mindfulness", "mental-health", "wellness"],
    author: {
      id: 3,
      name: "David Park",
      bio: "Meditation teacher and wellness coach"
    },
    createdAt: "2023-06-05T11:15:00Z",
    updatedAt: "2023-06-05T11:15:00Z",
    readTime: 5,
    commentCount: 12
  },
  {
    id: 4,
    title: "Remote Work: Boosting Productivity While Maintaining Balance",
    slug: "remote-work-productivity-balance",
    excerpt: "Strategies for maximizing productivity and maintaining work-life boundaries in a remote or hybrid work environment.",
    content: `
# Remote Work: Boosting Productivity While Maintaining Balance

The landscape of work has fundamentally shifted in recent years, with remote and hybrid arrangements becoming the norm for many knowledge workers. While this flexibility offers numerous benefits, it also presents unique challenges for productivity and work-life balance.

## Creating a Dedicated Workspace

Even if you don't have a separate home office, designating a specific area for work helps create psychological boundaries between professional and personal life. Ideally, this space should be comfortable, well-lit, and free from major distractions. When possible, avoid working from your bed or couch, as these areas are associated with relaxation.

## Establishing a Routine

Without the structure of a traditional office environment, creating and maintaining a consistent routine becomes essential. Start and end your workday at the same times, incorporate regular breaks, and include transitions that help you mentally shift between "work mode" and "home mode."

## Effective Communication Practices

Clear communication becomes even more critical in remote settings. Be intentional about your availability, response times, and preferred communication channels. Consider having "office hours" when colleagues know you're available for spontaneous discussions, and protect focused work time by turning off notifications when necessary.

## Technology Management

While technology enables remote work, it can also contribute to burnout if not managed thoughtfully. Experiment with techniques like time blocking, the Pomodoro method, or digital wellness tools to maintain focus and prevent digital fatigue.

## Conclusion

Remote work offers unprecedented flexibility, but realizing its full potential requires intentionality and self-awareness. By creating supportive structures and boundaries, you can maintain productivity while protecting your well-being in this new work paradigm.
    `,
    coverImage: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Business",
    tags: ["remote-work", "productivity", "work-life-balance", "career"],
    author: {
      id: 4,
      name: "Sophia Rodriguez",
      bio: "Workplace strategist and productivity consultant"
    },
    createdAt: "2023-06-01T08:45:00Z",
    updatedAt: "2023-06-01T08:45:00Z",
    readTime: 7,
    commentCount: 9
  },
  {
    id: 5,
    title: "The Rise of Immersive Art Experiences",
    slug: "rise-of-immersive-art-experiences",
    excerpt: "How technology is transforming traditional art forms and creating new ways for audiences to engage with creative works.",
    content: `
# The Rise of Immersive Art Experiences

Traditional art viewing has typically involved quiet contemplation of static works in hushed gallery spaces. But a new paradigm is emerging—one where audiences don't just observe art but physically enter and interact with it through immersive experiences.

## Beyond the White Cube

Immersive art installations break down the barriers between viewer and artwork, inviting participants to engage with creative works using multiple senses. These experiences often combine visual elements with sound, movement, touch, and sometimes even scent to create multidimensional environments that envelop the audience.

## Technology as an Artistic Medium

Digital tools have dramatically expanded the possibilities for immersive art. Projection mapping allows artists to transform any surface into a dynamic canvas. Virtual and augmented reality technologies create entirely new worlds or overlay digital elements onto physical spaces. Interactive elements respond to audience movements, making each person's experience unique.

## Cultural Impact

These new art forms have proven enormously popular, attracting diverse audiences who might not typically visit traditional museums. The social media-friendly nature of many immersive experiences has further contributed to their cultural prominence, as visitors share their encounters online.

## Artistic Substance vs. Spectacle

As with any emerging medium, the immersive art world is navigating questions about substance and spectacle. Critics sometimes question whether these experiences prioritize entertainment over artistic depth, while proponents argue that accessibility and engagement are inherently valuable in expanding art's reach.

## Conclusion

Immersive art experiences represent a significant evolution in how we create and consume creative works. By engaging audiences in new ways and blurring the boundaries between disciplines, these innovative formats are reshaping our understanding of what art can be and how we interact with it.
    `,
    coverImage: "https://images.pexels.com/photos/2110951/pexels-photo-2110951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Culture",
    tags: ["art", "technology", "digital", "immersive"],
    author: {
      id: 5,
      name: "Julian West",
      bio: "Art critic and digital culture writer"
    },
    createdAt: "2023-05-28T15:20:00Z",
    updatedAt: "2023-05-28T15:20:00Z",
    readTime: 6,
    commentCount: 15
  },
  {
    id: 6,
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    slug: "blockchain-beyond-cryptocurrency",
    excerpt: "Exploring how blockchain technology is being applied in supply chain management, healthcare, voting systems, and more.",
    content: `
# Blockchain Beyond Cryptocurrency: Real-World Applications

While blockchain technology first gained prominence as the foundation for Bitcoin and other cryptocurrencies, its potential applications extend far beyond digital currencies. At its core, blockchain offers a secure, transparent, and tamper-resistant system for recording transactions and tracking assets—capabilities that can transform numerous industries.

## Supply Chain Transparency

One of the most promising applications of blockchain is in supply chain management. By creating an immutable record of a product's journey from origin to consumer, blockchain can verify authenticity, ensure ethical sourcing, and quickly trace contaminated products to their source during recalls.

For example, major retailers are implementing blockchain to track produce from farm to store, allowing consumers to scan a QR code and view the entire journey of their fruits and vegetables, including harvest dates, shipping conditions, and certifications.

## Healthcare Data Management

Healthcare organizations are exploring blockchain for secure medical record management. A blockchain-based system could give patients control over their data while ensuring that authorized healthcare providers have access to complete, accurate information. This could reduce medical errors, streamline care coordination, and enhance privacy protections.

## Voting Systems

Blockchain technology could address longstanding concerns about election security and accessibility. A blockchain-based voting system would create a transparent, verifiable record of votes that is resistant to tampering while potentially increasing participation by enabling secure remote voting.

## Conclusion

As blockchain technology matures beyond its cryptocurrency origins, we're beginning to see its transformative potential across diverse sectors. While challenges remain—including energy consumption concerns, regulatory questions, and implementation complexities—the unique capabilities of blockchain for creating trust in digital environments make it a technology worth watching closely in the coming years.
    `,
    coverImage: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Technology",
    tags: ["blockchain", "technology", "innovation", "cryptocurrency"],
    author: {
      id: 1,
      name: "Alex Chen",
      bio: "Tech journalist and AI researcher"
    },
    createdAt: "2023-05-22T10:10:00Z",
    updatedAt: "2023-05-22T10:10:00Z",
    readTime: 7,
    commentCount: 21
  }
];