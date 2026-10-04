import Link from '~/components/Link';
import IconGithub from '~/icons/Github';
import IPaths from '~/types/paths';

interface IProject {
  name: string;
  emoji: string;
  description: string;
  url: IPaths;
  extras?: { name: string; url: IPaths }[];
}

const PROJECTS: IProject[] = [
  {
    name: 'SearchObject',
    emoji: '🔎',
    description: 'Ruby DSL for building search and filter objects.',
    url: 'https://github.com/RStankov/SearchObject',
    extras: [
      {
        name: 'GraphQL plugin',
        url: 'https://github.com/RStankov/SearchObjectGraphQL',
      },
    ],
  },
  {
    name: 'AngryBatch',
    emoji: '📦',
    description: 'ActiveJob batch processing with completion hooks.',
    url: 'https://github.com/RStankov/AngryBatch',
  },
  {
    name: 'KittyPolicy',
    emoji: '😸',
    description: 'Authorization library for Ruby, built at Product Hunt.',
    url: 'https://github.com/producthunt/kitty-policy',
  },
  {
    name: 'PromptBox',
    emoji: '🤖',
    description: 'Alfred workflow to run prompts.',
    url: 'https://github.com/RStankov/PromptBox',
  },
];

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Projects</h1>
        <p className="text-gray-600">
          Open source projects I maintain. Older and smaller ones are on my{' '}
          <Link
            href="https://github.com/rstankov"
            target="_blank"
            className="underline hover:no-underline"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
        {PROJECTS.map((project) => (
          <Project key={project.url} project={project} />
        ))}
      </div>
    </div>
  );
}

function Project({ project }: { project: IProject }) {
  return (
    <div className="flex gap-4 items-center p-4 hover:bg-gray-50 transition-colors">
      <span className="text-3xl">{project.emoji}</span>
      <div className="flex-1">
        <strong>
          <Link href={project.url} target="_blank" className="hover:underline">
            {project.name}
          </Link>
        </strong>
        <div className="text-gray-600">{project.description}</div>
        {project.extras?.map((extra) => (
          <Link
            key={extra.url}
            href={extra.url}
            target="_blank"
            className="text-sm underline hover:no-underline"
          >
            {extra.name}
          </Link>
        ))}
      </div>
      <Link href={project.url} target="_blank" title="GitHub">
        <IconGithub className="h-5 hover:text-brand" />
      </Link>
    </div>
  );
}
