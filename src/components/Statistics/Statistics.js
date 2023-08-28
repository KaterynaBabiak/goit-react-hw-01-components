import { Statwrapper, Title, StatList, StatItem } from './Statistics.styled'

export const Statistics = ({ items, title }) => {
    return (
        <Statwrapper>
            {title && <Title>{title}</Title>}
            <StatList>
                {items.map((item) => (
                    <StatItem key={item.id}>
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                    </StatItem>
                ))}
            </StatList>
        </Statwrapper>

    );
};

