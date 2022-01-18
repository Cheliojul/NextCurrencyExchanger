import Header from './Header';

export default function Layout({ children }: { children: HTMLElement }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
