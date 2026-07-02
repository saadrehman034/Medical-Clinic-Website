import { z } from "zod"

export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  phoneNumber: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  department: z.string().min(1, "Please select a department."),
  date: z.string().min(1, "Please select a preferred date."),
  message: z.string().optional(),
})

export type AppointmentFormValues = z.infer<typeof appointmentSchema>
