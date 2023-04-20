
type HeadingProps = {
    children: string
}
export const Heading = (props: HeadingProps) => {
    return (
        <div>
            <h2>{props.children}</h2>
            <h2>Placeholder text</h2>
        </div>
    )
};
