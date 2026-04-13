import {
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const Projects = () => {
  const workExperience = [
    {
      key: 12,
      imgSrc: "itemInventory.png",
      companyName: "Marlow Navigation Phils",
      project: "Inventory System",
      position: "Software Engineer",
      workDesc: `I participated in building a system used by our partner suppliers. I built an Item Inventory module where users can track stocks of available items, add stocks, search stocks through item batch, and add or delete a batch.`,
      techStacks: [
        "React Js",
        "Next Js",
        "Material UI",
        "MNCore component",
        "Typescript",
        "Git",
        "Agile",
      ],
    },
    {
      key: 1,
      imgSrc: "balanghai.png",
      companyName: "Marlow Navigation Phils.",
      project: "Employee Portal",
      position: "Software Engineer / Frontend focused",
      workDesc: `A software engineer focused on front-end development, working across multiple modules used by different departments, including visa ordering, visa administration, visa supplier management, loan ordering, and loan administration. Also participated in peer code reviews and collaborated with Business Analysts to clarify and validate module requirements.`,
      techStacks: [
        "React Js",
        "Next Js",
        "Redux",
        "Material UI",
        "Jira",
        "Agile",
        "Git",
      ],
    },
    {
      key: 2,
      imgSrc: "infor.png",
      companyName: "Infor Pssc",
      project: "Infor CloudSuite PLM for Fashion",
      position: "Junior Software Engineer / Full Stack Engineer",
      workDesc: `Worked as a Junior Full-Stack Engineer within a fashion line of business, contributing to a multitenant account management system. Collaborated closely with Business Analysts and QA engineers to gather and clarify feature requirements, ensuring deliverables aligned with business needs. Participated in Agile ceremonies and peer code reviews, developed new features, resolved reported bugs, and wrote unit tests using Jest to maintain code reliability.`,
      techStacks: [
        "C#",
        ".Net core web api",
        "React Js",
        "Javascript",
        "MySql",
        "Redux",
        "Git",
        "Jira",
        "saas",
        "Jest testing",
      ],
    },
    {
      key: 3,
      imgSrc: "xytron.png",
      project: "Maintaining Existing System",
      companyName: "Xytron International Inc.",
      position: "Junior Software Engineer",
      workDesc: `Contributed to building and maintaining internal tools that
                streamlined operations across multiple departments — reducing
                manual workloads and improving data accuracy in critical
                business workflows. Responsibilities included maintaining the
                SOA data generation system, developing cross-department tools,
                resolving bugs, and documenting systems for long-term
                maintainability.`,
      techStacks: [
        "C#",
        "Vb.net",
        "Press Printing (internal tools)",
        "Microsoft db access",
        "MySql",
      ],
    },
  ];
  return (
    <div id="section3" style={{ padding: "2rem" }}>
      <Heading size={"lg"} style={{ marginBottom: "2rem" }}>
        A selection of projects I've worked on across industries and tech
        stacks.
      </Heading>
      <Grid
        margin={"0 auto"}
        templateColumns="repeat(3, 1fr)"
        maxW={"80%"}
        gap="6"
      >
        {workExperience.map((item) => (
          <GridItem key={item.key}>
            <Card.Root
              maxW="lg"
              overflow="hidden"
              key={item.key}
              variant={"elevated"}
            >
              <Image src={item.imgSrc} alt={item.companyName} />
              <Card.Body gap="2">
                <Card.Title textAlign={"center"}>{item.project}</Card.Title>
                <Card.Title>{item.companyName}</Card.Title>
                <Text fontWeight="medium" letterSpacing="tight" mt="2">
                  {item.position}
                </Text>

                <Card.Description>{item.workDesc}</Card.Description>
              </Card.Body>
              <Card.Footer>
                <Flex gap={"2"} wrap={"wrap"}>
                  {item.techStacks.map((skill) => (
                    <Badge colorPalette={"blue"} size={"md"} key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Card.Footer>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
