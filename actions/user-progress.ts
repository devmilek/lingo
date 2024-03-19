'use server';

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { auth, currentUser } from "@clerk/nextjs";

export const upsertUserProgress = async (courseId: number) => {
    const {userId} = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        throw new Error("User not found");
    }

    const course = await getCourseById(courseId);

    if (!course) {
        throw new Error("Course not found");
    }

    // if (!course.units.length || !course.units[0].lessons.length) {
    //     throw new Error("Course has no units or lessons");
    // }

    const existingUserProgress = await getUserProgress();
}