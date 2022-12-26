import Head from '~/components/Head';
import coverImage from '~/screens/about/cover.jpg';

export default function PageHead() {
  return (
    <Head
      title="About Radoslav Stankov"
      description="Radoslav Stankov history"
      image={coverImage.src}
    />
  );
}
