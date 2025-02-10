import { NextResponse, NextRequest } from "next/server";
import z from "zod";
import { sendContactEmail } from "../../../../email/sendContactEmail";
const bodySchema = z.object({
  name: z
    .string()
    .min(2, "Enter minimum 2 letters as name.")
    .max(255, "Enter maximum 255 letters as name."),
  email: z.string().email("Enter valid email address."),
  number: z.string().optional(),
  subject: z
    .string()
    .min(2, "Enter minimum 2 letters as subject.")
    .max(255, "Enter maximum 255 letters as subject.")
    .optional(),
  message: z
    .string()
    .min(2, "Enter minimum 2 letters as message.")
    .max(255, "Enter maximum 255 letters as message."),
});
export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body) {
    return NextResponse.json(
      {
        message: "invalid request",
      },
      {
        status: 400,
      }
    );
  }
  console.log(body.email);
  if (bodySchema.safeParse(body).success === false) {
    return NextResponse.json(
      {
        message: bodySchema.safeParse(body).error,
      },
      {
        status: 400,
      }
    );
  }

  const { name, email, number, subject, message } = body;

  console.log(name, email, number, subject, message);

  try {
    if (!(await sendContactEmail(email, name, subject, number, message))) {
      return NextResponse.json(
        {
          message: "Internal Error",
        },
        {
          status: 500,
        }
      );
    }
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "internal Error",
      },
      {
        status: 500,
      }
    );
  }
}
