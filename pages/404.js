export default function Custom404() {
  return (
    <div>
      <div className="flex flex-1 flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-title">
          This page is not ready yet
        </h1>
        <p>Hold on! I'm still working on this.</p>
      </div>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
}
