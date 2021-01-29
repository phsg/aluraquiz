import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
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
        <Widget>
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

        <Widget>
          <Widget.Header>
            <h1>The legends</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Campo 02</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="http meu caminho" />
    </QuizBackground>
  );
}
