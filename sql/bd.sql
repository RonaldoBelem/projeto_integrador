CREATE TABLE usuario (
  ID SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  email VARCHAR(100),
  senha VARCHAR(20),
  cidade VARCHAR(50),
  estado VARCHAR(50)
);

CREATE TABLE publicacao (
  ID SERIAL PRIMARY KEY,
  user_id INT,
  titulo VARCHAR(100),
  texto TEXT,
  data TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES usuario (ID)
);

CREATE TABLE artigo (
  ID SERIAL PRIMARY KEY,
  titulo VARCHAR(100),
  data TIMESTAMP,
  url_img VARCHAR(255),
  texto TEXT
);

CREATE TABLE parceiro (
  ID SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  url_img VARCHAR(255),
  url_site VARCHAR(255)
);


INSERT INTO usuario (nome, email, senha, cidade, estado)
VALUES
  ('João', 'joao@example.com', 'senha123', 'São Paulo', 'SP'),
  ('Maria', 'maria@example.com', 'senha456', 'Rio de Janeiro', 'RJ'),
  ('Pedro', 'pedro@example.com', 'senha789', 'Belo Horizonte', 'MG'),
  ('Ana', 'ana@example.com', 'senhaabc', 'Salvador', 'BA'),
  ('Lucas', 'lucas@example.com', 'senhadef', 'Porto Alegre', 'RS'),
  ('Carla', 'carla@example.com', 'senhaghi', 'Curitiba', 'PR'),
  ('Gabriel', 'gabriel@example.com', 'senhajkl', 'Brasília', 'DF'),
  ('Julia', 'julia@example.com', 'senhamno', 'Fortaleza', 'CE'),
  ('Fernando', 'fernando@example.com', 'senhapqr', 'Recife', 'PE'),
  ('Mariana', 'mariana@example.com', 'senhastu', 'Manaus', 'AM');


INSERT INTO publicacao (user_id, titulo, texto, data)
VALUES
  (1, 'Primeira Publicação', 'Este é o texto da primeira publicação.', '2024-04-21 10:00:00'),
  (2, 'Nova Postagem', 'Conteúdo da nova postagem.', '2024-04-22 12:30:00'),
  (3, 'Atualização Importante', 'Informações sobre a atualização.', '2024-04-23 15:45:00'),
  (4, 'Novidades no Site', 'Confira as últimas novidades.', '2024-04-24 18:00:00'),
  (5, 'Evento Especial', 'Detalhes sobre o evento.', '2024-04-25 09:00:00'),
  (6, 'Artigo Recente', 'Análise do novo artigo.', '2024-04-26 11:00:00'),
  (7, 'Novo Conteúdo', 'Veja o novo conteúdo disponível.', '2024-04-27 14:00:00'),
  (8, 'Aviso Importante', 'Aviso para todos os usuários.', '2024-04-28 16:30:00'),
  (9, 'Atualização de Segurança', 'Informações sobre a atualização de segurança.', '2024-04-29 19:00:00'),
  (10, 'Evento Futuro', 'Preparativos para o evento.', '2024-04-30 08:00:00');


INSERT INTO artigo (titulo, data, url_img, texto)
VALUES
  ('Novo Artigo', '2024-04-21 09:00:00', 'http://example.com/img1.jpg', 'Texto do novo artigo.'),
  ('Análise de Mercado', '2024-04-22 10:30:00', 'http://example.com/img2.jpg', 'Análise detalhada do mercado.'),
  ('Tendências Tecnológicas', '2024-04-23 11:45:00', 'http://example.com/img3.jpg', 'Visão geral das tendências tecnológicas.'),
  ('Dicas de Viagem', '2024-04-24 13:00:00', 'http://example.com/img4.jpg', 'Dicas para planejar sua próxima viagem.'),
  ('Receitas Saudáveis', '2024-04-25 14:30:00', 'http://example.com/img5.jpg', 'Receitas saudáveis para uma alimentação equilibrada.'),
  ('Guia de Investimentos', '2024-04-26 16:00:00', 'http://example.com/img6.jpg', 'Guia completo para investidores iniciantes.'),
  ('Novidades no Mundo da Moda', '2024-04-27 17:30:00', 'http://example.com/img7.jpg', 'Fique por dentro das últimas tendências da moda.'),
  ('Desenvolvimento Pessoal', '2024-04-28 19:00:00', 'http://example.com/img8.jpg', 'Dicas e recursos para seu desenvolvimento pessoal.'),
  ('O Futuro do Trabalho', '2024-04-29 20:30:00', 'http://example.com/img9.jpg', 'Perspectivas sobre o futuro do mercado de trabalho.'),
  ('Cuidados com o Meio Ambiente', '2024-04-30 09:30:00', 'http://example.com/img10.jpg', 'A importância da sustentabilidade para o planeta.');


INSERT INTO parceiro (nome, url_img, url_site)
VALUES
  ('Parceiro 1', 'http://example.com/img1.jpg', 'http://parceiro1.com'),
  ('Parceiro 2', 'http://example.com/img2.jpg', 'http://parceiro2.com'),
  ('Parceiro 3', 'http://example.com/img3.jpg', 'http://parceiro3.com'),
  ('Parceiro 4', 'http://example.com/img4.jpg', 'http://parceiro4.com'),
  ('Parceiro 5', 'http://example.com/img5.jpg', 'http://parceiro5.com'),
  ('Parceiro 6', 'http://example.com/img6.jpg', 'http://parceiro6.com'),
  ('Parceiro 7', 'http://example.com/img7.jpg', 'http://parceiro7.com'),
  ('Parceiro 8', 'http://example.com/img8.jpg', 'http://parceiro8.com'),
  ('Parceiro 9', 'http://example.com/img9.jpg', 'http://parceiro9.com'),
  ('Parceiro 10', 'http://example.com/img10.jpg', 'http://parceiro10.com');



SELECT data::date AS data_publicacao, COUNT(*) AS total_publicacoes
FROM publicacao
GROUP BY data::date
ORDER BY data::date;

SELECT usuario.ID, usuario.nome, publicacao.titulo, publicacao.texto, publicacao.data
FROM usuario
INNER JOIN publicacao ON usuario.ID = publicacao.user_id;

