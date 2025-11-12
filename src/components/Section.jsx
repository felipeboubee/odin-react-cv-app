export default function Section({title, children}){
    return (
    <section>
        <h2 className="section-title">{title}</h2>
        <div className="section-content">{children}</div>
    </section>
    );
}