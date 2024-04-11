"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <div className="h-[40rem] mt-36 w-full rounded-md bg-slate-950 relative flex flex-col items-center justify-center antialiased">
      <footer className="w-full ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Build your dream PC with us!
                  </h2>

                  <p className="mt-4 text-gray-400">
                    {`"Confused about what parts to buy? No worries, we've got you
                    covered! Don't hesitate to visit our forum and ask our
                    amazing community."`}
                  </p>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end justify-end">
                <Image
                  alt="custom-computers"
                  src="/logo.png"
                  width={230}
                  height={230}
                  className=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="relative font-medium text-mono">Quick Links</p>

                <ul
                  style={{ listStyle: "none" }}
                  className="mt-6 space-y-4 text-sm"
                >
                  <li>
                    <Link
                      href="/"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/browse"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      browse
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/builds"
                      className="transition hover:opacity-75 text-gray-200 cursor-pointer"
                    >
                      builds
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/forum"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      forum
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <ul
                  style={{ listStyle: "none" }}
                  className="mt-6 space-y-4 text-sm"
                >
                  <li>
                    <Link
                      href="/cart"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      cart
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/user-profile"
                      className="transition hover:opacity-75 text-gray-200"
                    >
                      user profile
                    </Link>
                  </li>
                </ul>
              </div>
              <ul
                style={{ listStyle: "none" }}
                className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end"
              >
                <li>
                  <a
                    href="https://www.facebook.com/codewithfaraz"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-[#1877F2] text-gray-200"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/codewithfaraz"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-[#E4405F] text-gray-200"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/codewithfaraz"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-[#1DA1F2] text-gray-200"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/farazc60"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-[#333333] text-gray-200"
                  >
                    <span className="sr-only">GitHub</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@codewithfaraz"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:text-[#FF0000] text-gray-200"
                  >
                    <span className="sr-only">YouTube</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M21.034 7.382c-.197-.738-.781-1.322-1.52-1.518C17.408 5 12 5 12 5s-5.408 0-7.514.864c-.739.197-1.323.78-1.52 1.518C2 9.488 2 12 2 12s0 2.512.966 4.618c.197.738.781 1.322 1.52 1.518C6.592 19 12 19 12 19s5.408 0 7.514-.864c.739-.197 1.323-.78 1.52-1.518C22 14.512 22 12 22 12s0-2.512-.966-4.618zM10 15V9l5 3-5 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 border-gray-800">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs text-gray-400">
                © 2024. custom PC builder. All rights reserved.
              </p>

              <ul
                style={{ listStyle: "none" }}
                className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
              >
                <li>
                  <a
                    href="https://www.codewithfaraz.com/terms-and-conditions"
                    className="transition hover:opacity-75 text-gray-400"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.codewithfaraz.com/privacy-policy"
                    className="transition hover:opacity-75 text-gray-400"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <BackgroundBeams className="relative -z-1" />
    </div>
  );
}
