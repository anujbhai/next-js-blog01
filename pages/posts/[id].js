import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export async function getStaticPaths() {
	const paths = getAllPostsIds();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({params}) {
	const postData = await getPostData(params.id);

	return {
		props: {postData},
	};
}

function Post({postData}) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>

			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>

				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				
				<div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
			</article>
		</Layout>
	);
}

export default Post;
