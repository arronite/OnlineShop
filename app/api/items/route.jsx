import { NextResponse } from "next/server";
import { getPosts } from "@/lib/data";

export const GET = async (req, res) => {
  const posts = getPosts();
  return NextResponse.json(posts);
};
