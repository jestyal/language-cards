export default function SocialLink({ title, link, svg }) {
    return (
        <a href={link} className="Social__link" title={title} target="_blank" rel="noreferrer">
            {svg}
        </a>
    );
}
