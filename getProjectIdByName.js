const fetch = require('node-fetch')

export default async function getProjectIdByName(
  fiberyHost,
  fiberyToken,
  projectName
) {
  try {
    let YOUR_SPACE_ENDPOINT =
      'https://' + fiberyHost + '/api/graphql/space/Project_Management';

    let projectRequest = await fetch(YOUR_SPACE_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        query: `{ findProjects(name:{is:"${projectName}"}){ id, name, publicId } }`,
      }),
      headers: {
        'Content-Type': `application/json`,
        Authorization: `Token ${fiberyToken}`,
      },
    });

    if (projectRequest.status == 200) {
      let project = await projectRequest.json();

      if (project?.data?.findProjects?.length > 0) {
        let projectId = project.data.findProjects[0].id;
        console.log('projectId ', projectId);
        return projectId;
      } else {
        console.error('Could not find project');
        return null;
      }
    } else {
      console.error('Could not connect to fibery');
      return null;
    }
  } catch (error) {
    console.error('Something went wrong with getProjectIdByName');
    console.error(error);
    return null;
  }
}
