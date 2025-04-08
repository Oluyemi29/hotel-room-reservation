import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import { Provider } from "@/components/ui/provider";
import { ClerkProvider } from "@clerk/nextjs";

const AllProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      signInForceRedirectUrl={"/api/creation"}
      signUpForceRedirectUrl={"/api/creation"}
    >
      <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Provider>{children}</Provider>
        </NextThemesProvider>
      </HeroUIProvider>
    </ClerkProvider>
  );
};

export default AllProvider;
