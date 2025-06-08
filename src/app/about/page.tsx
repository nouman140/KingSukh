import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Users, Target, Eye } from "lucide-react";

// Import images from src/assets
import teamBuildingImg from "@/assets/kingsukh-team-building.png";
import teamMember1Img from "@/assets/team-member-1.png";
import teamMember2Img from "@/assets/team-member-2.png";
import teamMember3Img from "@/assets/team-member-3.png";

export default function AboutPage() {
  const teamMembers = [
    {
      id: 2,
      src: teamMember2Img,
      alt: "Team member 2",
      name: "Clint Barton",
      role: "CEO",
    },
    {
      id: 1,
      src: teamMember1Img,
      alt: "Team member 1",
      name: "Natasha Romanoff",
      role: "Founder",
    },

    {
      id: 3,
      src: teamMember3Img,
      alt: "Team member 3",
      name: "Sam Willson",
      role: "Co-Founder",
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          About {APP_NAME}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the story behind our commitment to providing a warm,
          welcoming, and authentic experience in the heart of Shantiniketan.
        </p>
      </section>

      <section>
        <Card className="overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2">
              <Image
                src={teamBuildingImg}
                alt="Kingsukh Guest House Team or Building"
                className="object-cover w-full h-64 md:h-full"
                data-ai-hint="team photo building"
                placeholder="blur"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-heading text-primary mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                {APP_NAME} was founded with a simple vision: to create a
                peaceful haven for travelers visiting the historic land of
                Bolpur, Shantiniketan. We wanted to offer more than just a place
                to stay; we aimed to provide an experience that resonates with
                the cultural and natural beauty of the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Inspired by the serene atmosphere and the rich artistic heritage
                of Shantiniketan, our guesthouse is designed to be a comfortable
                and an inspiring space. We believe in warm hospitality,
                attention to detail, and creating lasting memories for our
                guests.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center text-primary mb-2">
              <Target className="w-8 h-8 mr-3" />
              <CardTitle className="text-2xl font-heading">
                Our Mission
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To provide exceptional hospitality and a comfortable, culturally
              enriching stay for every guest. We strive to be a home away from
              home, fostering a connection with the local heritage and natural
              beauty of Shantiniketan.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center text-primary mb-2">
              <Eye className="w-8 h-8 mr-3" />
              <CardTitle className="text-2xl font-heading">
                Our Vision
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as the preferred guesthouse in Bolpur,
              Shantiniketan, known for our warm service, authentic experiences,
              and commitment to guest satisfaction, contributing positively to
              the local community and environment.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-heading text-primary mb-6">
          Meet Our Leaders
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="shadow-md p-6">
              <Image
                src={member.src}
                alt={member.alt}
                className="rounded-full mx-auto mb-4 w-[150px] h-[150px] object-cover"
                data-ai-hint="portrait person"
                placeholder="blur"
              />
              <h3 className="text-xl font-heading text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary">{member.role}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
