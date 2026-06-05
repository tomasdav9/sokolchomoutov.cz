type SectionHeaderProps = {
  kicker: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  light?: boolean;
};

export function SectionHeader({
  kicker,
  title,
  highlightedTitle,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="sec-head">
      <span className={`kicker${light ? " light" : ""}`}>{kicker}</span>
      <h2>
        {title}
        {highlightedTitle ? (
          <>
            {" "}
            <span className="o">{highlightedTitle}</span>
          </>
        ) : null}
      </h2>
      <p>{description}</p>
    </div>
  );
}
