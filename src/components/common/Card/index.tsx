interface CardProps {
	title: string
}

export const Card: React.FC<CardProps> = ({ title }) => {
	return <div>{title}</div>
}
