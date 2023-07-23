interface Props {
	version: string;
	changes: string[];
}

export const Version = (props: Props) => {
	return (
		<li>
			<div>Version {props.version}</div>
			<ul className="list-disc pl-5">
				{props.changes.map((change) => (
					<li key={change}>{change}</li>
				))}
			</ul>
		</li>
	);
};
