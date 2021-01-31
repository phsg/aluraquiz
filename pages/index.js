import React, { useState } from 'react';
// import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import Link from '../src/components/Link';

export default function Home() {
  const rota = useRouter();
  const [nome, setNome] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0.0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>The legend</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(evento) => {
              evento.preventDefault();
              rota.push(`/quiz?name=${nome}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infoDoEvento) => {
                  setNome(infoDoEvento.target.value);
                }}
                placeholder="Diz seu nome"
                value={nome}
              />
              <Button
                type="submit"
                disabled={nome.length === 0}
              >
                {`Jogar ${nome}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>The legends</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Quiz da galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, gitHubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic href={linkExterno}>
                      as=
                      {Link}
                      {`${gitHubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.section}
          transition={{ delay: 0.0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="http meu caminho" />
    </QuizBackground>
  );
}
