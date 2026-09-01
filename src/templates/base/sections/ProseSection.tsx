export function ProseSection({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className='flex flex-col gap-3'>
      {paragraphs.map((text, i) => (
        <p
          key={i}
          className='m-0 max-w-[64ch] text-3.75 leading-[1.55] text-justify hyphens-auto'
          style={{ textWrap: 'pretty' }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}
