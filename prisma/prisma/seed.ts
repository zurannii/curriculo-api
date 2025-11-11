import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o seeding...');

  await prisma.user.deleteMany({});
  
  const user1 = await prisma.user.create({
    data: {
      name: 'João da Silva',
      current_position: 'Desenvolvedor Back-end Sênior',
      professional_summary: 'Especialista em Node.js e PostgreSQL com 8 anos de experiência...',
      location: 'São Paulo, Brasil',
      email: 'joao.silva@exemplo.com',
      phone: '+55 11 98765-4321',
      linkedin: 'linkedin.com/in/joaosilva',
      github: 'github.com/joaosilva',
      experiences: {
        create: [
          {
            role: 'Desenvolvedor Sênior',
            company: 'Tech Solutions',
            start_date: new Date('2020-01-15'),
          },
          {
            role: 'Desenvolvedor Pleno',
            company: 'Web Inovadora',
            start_date: new Date('2017-05-10'),
            end_date: new Date('2020-01-10'),
          },
        ],
      },
      education: {
        create: {
          degree: 'Bacharelado em Ciência da Computação',
          institution: 'Universidade de São Paulo (USP)',
          start_date: new Date('2013-02-01'),
          end_date: new Date('2017-12-15'),
        },
      },
      skills: {
        create: [
          { name: 'Node.js', type: 'Back-end' },
          { name: 'PostgreSQL', type: 'Banco de Dados' },
          { name: 'TypeScript', type: 'Linguagem' },
        ],
      },
      projects: {
        create: {
          title: 'API de E-commerce',
          description: 'API RESTful de alta performance para e-commerce.',
          role: 'Arquiteto de Software',
          technologies_used: 'Node.js, Express, Prisma, PostgreSQL',
          github_link: 'github.com/joaosilva/api-ecommerce',
        },
      },
      languages: {
        create: [
          { language: 'Português', proficiency: 'Nativo' },
          { language: 'Inglês', proficiency: 'Fluente' },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Maria Oliveira',
      current_position: 'UX/UI Designer',
      professional_summary: 'Designer focada em interfaces intuitivas e experiência do usuário...',
      location: 'Rio de Janeiro, Brasil',
      email: 'maria.oliveira@exemplo.com',
      phone: '+55 21 91234-5678',
      linkedin: 'linkedin.com/in/mariaoliveira',

      experiences: {
        create: [
          {
            role: 'Lead UX/UI Designer',
            company: 'Design Co.',
            start_date: new Date('2019-03-01'),
          },
        ],
      },
      education: {
        create: {
          degree: 'Design Gráfico',
          institution: 'Universidade Federal do Rio de Janeiro (UFRJ)',
          start_date: new Date('2015-02-01'),
          end_date: new Date('2019-01-30'),
        },
      },
      skills: {
        create: [
          { name: 'Figma', type: 'Design Tool' },
          { name: 'User Research', type: 'Metodologia' },
          { name: 'HTML/CSS', type: 'Front-end' },
        ],
      },
      certifications: {
        create: {
            name: 'Interação Humano-Computador',
            institution: 'Coursera',
            completion_date: new Date('2020-05-01')
        }
      },
      languages: {
        create: [
          { language: 'Português', proficiency: 'Nativo' },
          { language: 'Inglês', proficiency: 'Avançado' },
        ],
      },
    },
  });

  console.log('Seeding finalizado.');
  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });