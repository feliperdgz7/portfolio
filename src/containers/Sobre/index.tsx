import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Githubsecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa
      blanditiis laboriosam, fuga maiores incidunt labore harum quasi nobis?
      Quibusdam deserunt consectetur rerum nulla eaque modi nam architecto
      optio? Tenetur.
    </Paragrafo>
    <Githubsecao>
      <img src="https://github-readme-stats.vercel.app/api?username=feliperdgz7&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=feliperdgz7&layout=compact&langs_count=7&theme=dracula" />
    </Githubsecao>
  </section>
)

export default Sobre
