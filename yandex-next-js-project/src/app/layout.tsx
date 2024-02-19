// Мой микро коммент про React, Next и курс

// +
// сборщик на Rust
// alias из коробки (пути потом перепишу)
// SSR из коробки
// EsLint из коробки
// Возможно мне потом пригодиться

// -
// После vue components где весь html,css,js в 1 файле. jsx выглядит сумбурно

// После погружения в архитектуру(MVC увидел с бэка, Atomic Desing в дизайне, но он применим и к фронту)
// то как начали разбивать на компонеты, я имею ввиду от большего к меньшему
// это было не удобно. Думал что будет от меньшего к большему. По кирпичикам собирать проект
// Условно: кнопка -> хедер -> шаблон -> страница

// P.S
// Я знаю что ребята из Яндекса крутышки, поэтому жду следующий урок. 👍
// А работу я сделал как у всех

import "./globals.css";
import { Metadata } from "next";
import React from "react";

import { Header } from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Pindie",
    description: "Портал инди-игр от студентов Яндекс Практикума",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
