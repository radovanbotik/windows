import prisma from "../../prisma/prisma";

export type Contact = {
  name: string;
  email: string;
};
export type EmailProps = {
  createdAt: string;
  id: number;
  from: string;
  to: string;
  subject: string;
  body: string;
  important: boolean;
  opened: boolean;
  attachment: boolean;
  authorId: number | null;
  deleted: boolean;
};

// export const receivedEmails: Email[] = [
//   {
//     id: 1,
//     from: "joebiden@gmail.com",
//     to: "radovanb@gmail.com",
//     subject: "Confidential: Immediate Attention Required",
//     date: "05/23/2024",
//     body: "Team,We're embarking on a critical and confidential mission. Details are top secret, but your expertise is crucial for success. Maintain utmost discretion. Await further instructions.",
//     important: true,
//     opened: false,
//     attachment: true,
//   },
//   {
//     id: 2,
//     from: "popefrancis@yahoo.com",
//     to: "radovanb@gmail.com",
//     subject: "Blessings from Vatican",
//     date: "05/20/2024",
//     body: "Dear Rado, Blessings upon you. May God's grace and peace fill your heart. You are in my prayers. Continue to spread love and compassion. In Christ, Pope Francis",
//     important: false,
//     opened: false,
//     attachment: false,
//   },
//   {
//     id: 3,
//     from: "nelli@gmail.com",
//     to: "radovanb@gmail.com",
//     subject: "greece info",
//     date: "01/15/2024",
//     body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere neque corporis mollitia veniam maiores eligendi sint sed commodi nemo laudantium, accusamus dolore perspiciatis esse provident ex dicta ipsam, enim molestiae optio error saepe illo. Dolores deserunt et neque assumenda dicta id quam enim magnam doloribus ratione doloremque, aut dolor eum?",
//     important: false,
//     opened: false,
//     attachment: false,
//   },
// ];
// export const sentEmails: Email[] = [
//   {
//     id: 1,
//     from: "joebiden@gmail.com",
//     to: "radovanb@gmail.com",
//     subject: "Confidential: Immediate Attention Required",
//     date: "05/23/2024",
//     body: "President Biden, I need to discuss an urgent, confidential matter. Please advise on a suitable time. Best regards, Rado",
//     important: true,
//     opened: false,
//     attachment: false,
//   },
// ];
// export const deletedEmails: Email[] = [
//   {
//     id: 1,
//     from: "alza.sk",
//     to: "radovanb@gmail.com",
//     subject: "Special Offer Just for You!",
//     date: "05/23/2024",
//     body: "Enjoy exclusive discounts on electronics at Alza.sk. Shop now and save big! Best, Alza.sk Team",
//     important: false,
//     opened: false,
//     attachment: false,
//   },
// ];
export const contacts: Contact[] = [
  {
    name: "pope francis",
    email: "popefrancis@yahoo.com",
  },
  {
    name: "joe biden",
    email: "joebiden@gmail.com",
  },
  {
    name: "nelli szeno",
    email: "nelli@gmail.com",
  },
];

export async function getReceivedEmails() {
  const data = await prisma.email.findMany({
    where: {
      to: "radovanb@gmail.com",
      deleted: false,
    },
  });
  const emails: EmailProps[] = data.map(email => ({ ...email, createdAt: email.createdAt.toLocaleDateString() }));
  return emails;
}

export async function getSentEmails() {
  const data = await prisma.email.findMany({
    where: { from: "radovanb@gmail.com" },
  });
  const emails: EmailProps[] = data.map(email => ({ ...email, createdAt: email.createdAt.toLocaleDateString() }));
  return emails;
}

export async function getDeletedEmails() {
  const data = await prisma.email.findMany({
    where: { deleted: true },
  });
  const emails: EmailProps[] = data.map(email => ({ ...email, createdAt: email.createdAt.toLocaleDateString() }));
  return emails;
}

export async function getEmail(id: number) {
  const data = await prisma.email.findUnique({ where: { id: id } });
  if (data) {
    const email = { ...data, createdAt: data.createdAt.toLocaleDateString() };
    return email;
  }
}
