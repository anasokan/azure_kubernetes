# Azure Kubernetes Hand On Training

This repository will show how to make a docker image and host it in Azure Kubernetes cluster.

## Pre-requisites
1. Create a account in https://hub.docker.com/. Here the docker images can be stored and used in any cloud providers environment.
2. Create a account in Azure https://azure.microsoft.com/en-in/features/azure-portal/. There will be some free credit for first time user with which you can explore and learn Azure as well as Azure Kubernetes Service (AKS).
3. A machine with docker installed.
    - For docker installation refer https://docs.docker.com/get-docker/ (My personal preference is to install docker in linux machine rather than Windows).
4. A machine with azure cli and kubectl installed (Probably you can do this in Windows machine or machine you are comfortable with)
    - For kubectl installation, refer to https://kubernetes.io/docs/tasks/tools/install-kubectl/
    - For Azure Cli installation, refer to https://documentation.solarwinds.com/en/Success_Center/SEM/Content/AzureDeploymentGuide/SEM-Install-CLI-2-0.htm


## Details
### Step 1: Create a docker images and save to registry
1. Go to the folder docker_images\WebServer
2. In that folder you can see
    - A simple nodejs file which a page stating Welcome.
    - A docker file to with docker instruction to create a docker image.
3. In the docker machine execute the command 'docker build --tag <docker hub account>/<docker image name> .' inside the folder docker_images\WebServer. For eg 'docker build --tag ananthaa/testserver_anantha .' where ananthaa is my docker hub account and testserver_anantha is the docker image name which is created.
4. Login to docker io using the command 'docker login docker.io' and provide the docker hub credentials you have created.
5. The push the docker image you created to docker.io using the command 'docker push ananthaa/testserver_anantha:latest'


### Step 2: Create a Azure Kubernetes Cluster and Map the config to the machine
1. Go to the portal http://portal.azure.com/ and login with your azure account.
2. Search for Kubernetes Service and click on 'Add' -> 'Add Kubernetes Clsuter'
3. Select the 'Free trail' susbcription and create a resource group.
4. In other tabs you could also do further customization to your cluster.
5. Finally review and create the cluster. ** Once cluster is created the free trail cost starts to be consumed, so create and use the cluster when needed and after that delete the cluster **
6. In your machine where you have azure cli and kubectl installed, login to azure using az login and provide the details of your azure credentials
7. After that the kubernetes service page when you click on your cluster and then connect, you will set of command on the right hand side.
8. Execute those command in the machine where you have installed azure cli and kubetctl.
9. After all installation when you execute, 'kubectl get nodes' you will see the list of nodes(VM's) in your kubernetes cluster.

### Step 3: Deploy the docker images created.
1. Go to the folder 'kubernets_deployment' in the repository.
2. Now update the docker-secret.yaml with your docker.io token in base 64 and then apply the secret. Command 'kubectl apply -f docker-secret.yaml'. To generate docker.io token 
    - docker login in any machine with your docker credentials.
    - Then there will be a docker config.json file in the home directory under .docker directory.
    - cat that file with base64 encoding like 'cat config.json | base64' and take the base64 encoded value.
3. Then apply the deployment file server-deployment.yaml.
4. Then create the service using service.yaml
5. After this fetch the service using 'kubectl get svc'. Take the external IP created and access it from web browser to check the final output.



Reach Out to anantha1708@gmail.com for queries.



