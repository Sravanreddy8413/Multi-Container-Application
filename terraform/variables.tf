variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "AWS Region"
}

variable "instance_type" {
  type        = string
  default     = "t3.micro"
  description = "EC2 Instance Type"
}

variable "ami_id" {
  type        = string
  default     = "ami-0453ec754f44f9a4a"
  description = "AMI ID for EC2 instance"
}

variable "key_name" {
  type        = string
  default     = ""
  description = "Name of existing AWS Key Pair for SSH access"
}
