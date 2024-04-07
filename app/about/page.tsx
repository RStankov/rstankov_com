import page from '~/screens/about';
import buildMetadata from '~/utils/buildMetadata';
import coverImage from '~/screens/about/cover.jpg';

export const metadata = buildMetadata({
  title: 'About Radoslav Stankov',
  description: 'Radoslav Stankov history',
  image: coverImage.src,
});

export default page;
