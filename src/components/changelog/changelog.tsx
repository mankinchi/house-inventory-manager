import { Version } from "./version";

export const Changelog = () => {
	return (
		<div>
			<div className="text-lg font-bold">Changelog</div>
			<div>
				<ul className="list-[circle] pl-5">
					<Version
						version="1.0.1"
						changes={[
							"Update login workflow to work on phone",
							"Add changelog for tracking",
						]}
					/>
					<Version
						version="1.0.0"
						changes={["Initial release"]}
					/>
				</ul>
			</div>
		</div>
	);
};
